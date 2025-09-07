
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'USYD',
      major: 'Design innovation',
      logo: 'college',
      start: '2025',
      end: '2027'
    },
    {
      school: 'SUSTECH',
      major: 'Industrial Design',
      logo: 'college',
      start: '2020',
      end: '2024'
    },
  ]