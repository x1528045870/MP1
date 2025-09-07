// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'USYD',
      title: 'STUDENT',
      logo: 'college',
      start: '2025',
      end: 'Present'
    },
    {
      company: 'SUSTECH',
      title: 'Software Engineer',
      logo: 'coffee',
      start: '2015',
      end: '2017'
    }
  ]