import dynamic from 'next/dynamic'

const Cmdf2021 = dynamic(() => import('@components/faq/templates/Cmdf2021'))
const TwoColumnExpandableCategories = dynamic(() => import('@components/faq/templates/ExpandableWithCategories'))

const FaqLoader = ({ chosenTemplate, shouldDisplay, ...props }) => {
  if (!shouldDisplay) return null
  switch (chosenTemplate) {
    case 'cmd-f_2021':
      return <Cmdf2021 {...props} />
    case 'two_column_expandable':
      return <TwoColumnExpandableCategories {...props} />
    default:
      return null
  }
}

export default FaqLoader
