class Routes {
  private baseUrl = '/'

  // Main route
  readonly HOME = this.baseUrl
  readonly RESUME = this.baseUrl + 'resume'
  readonly LIBRARY = this.baseUrl + 'library'
  readonly CONTACTS = this.baseUrl + 'contacts'
  readonly FEEDBACK = this.baseUrl + 'feedback'
}

export const Route = new Routes()
