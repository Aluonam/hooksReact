import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Counter from '@/components/ejUseState/Counter'
import TaskList from '@/components/ejUseState/TaskList'
import TaskList2 from '@/components/ejUseState/TaskList2'
import ChangeStyle from '@/components/ejUseState/ChangeStyle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
       <Counter></Counter>
       <br/>
       <TaskList></TaskList>
       <br/>
       <TaskList2></TaskList2>
       <br/>
       <ChangeStyle></ChangeStyle>
      </main>
    </>
  )
}
