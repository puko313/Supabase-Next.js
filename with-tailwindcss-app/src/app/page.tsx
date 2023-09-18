import { supabase } from "../../utils/supabase"
import Link from "next/link"

export default function Home({lessons}) {
  console.log(lessons);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {lessons.map(lesson => {
          <Link key={lesson.id} href={`/${lesson.id}`}>
            <a>{lesson.title}</a>
          </Link>
        })}
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from('lesson').select('*');

  return {
    props: {
      lessons,
    },
  }
}

