'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { sendMail } from '@/lib/send-mail'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Loader2, Mail, PencilLine, Signature } from 'lucide-react'

import { contactSchema } from '@/schemas'

import {
  Button,
  Container,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  Input,
  Textarea,
  ProgressLoader,
} from '@/components'

import type { ContactFormType } from '@/types'

interface IContactForm {
  className?: string
}

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL

export const ContactForm: React.FC<IContactForm> = ({ className }) => {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    try {
      setIsSubmitting(true)

      await sendMail({
        from: data.email,
        to: CONTACT_EMAIL as string,
        subject: data.email,
        text: data.text,
      })

      router.back()
    } catch (error) {
      setIsSubmitting(false)

      form.reset({
        name: '',
        email: '',
        text: '',
      })

      console.error('ContactForm: Failed to submit form', error)
    }
  }

  return (
    <Container className={cn('w-full flex flex-1 items-center justify-center', className)}>
      {isSubmitting && <ProgressLoader placeholder="Отправляем письмо..." />}

      {!isSubmitting && (
        <div className="w-full gap-20 py-20 flex items-center justify-center">
          <h1 className="max-w-min mb-10 font-raleway text-6xl text-right font-semibold leading-[3.85rem]">
            Связаться со мной
          </h1>

          <Form {...form}>
            <form
              className="max-w-[480px] w-full gap-1.5 flex flex-col relative"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="w-full mb-5 space-y-5 flex flex-col">
                {form.formState.isSubmitting && (
                  <div className="inset-0 flex items-center justify-center bg-background/60 absolute">
                    <Loader2 className="animate-spin" size={24} />
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-1 flex items-center">
                        <PencilLine size={16} /> Как к вам обращаться?
                      </FormLabel>

                      <FormControl>
                        <Input placeholder="Ваше имя" autoComplete="off" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-1 flex items-center">
                        <Mail size={16} /> Email
                      </FormLabel>

                      <FormControl>
                        <Input placeholder="example@email.com" autoComplete="off" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="gap-1 flex items-center">
                        <Signature size={16} /> Письмо
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          className="h-36 resize-none"
                          placeholder="Ваш текст для отправки"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className="w-fit border border-border"
                variant="secondary"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Отправить письмо
              </Button>
            </form>
          </Form>
        </div>
      )}
    </Container>
  )
}
