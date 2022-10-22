import type { NextPage } from 'next'
import tw from 'tailwind-styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      <p>yoyoyo</p>
    </Container>
  )
}

export default Home

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`
