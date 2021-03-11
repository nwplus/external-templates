import dynamic from 'next/dynamic'

const Dummy1 = dynamic(() => import('@components/dummy/Dummy1'))
const Dummy2 = dynamic(() => import('@components/dummy/Dummy2'))

const DummyLoader = ({ chosenTemplate }) => {
  switch (chosenTemplate) {
    case 'dummy1':
      return <Dummy1 />
    case 'dummy2':
      return <Dummy2 />
    default:
      return <p>bad import</p>
  }
}

export default DummyLoader
