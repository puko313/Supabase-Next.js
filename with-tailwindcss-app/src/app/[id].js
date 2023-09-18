import { supabase } from "../../utils/supabase";

const LessonsDetails = () => {
    return <div>Lesson Details</div>
}

export const getStaticPaths = async() => {
    const {data: lessons} = await supabase.from('lesson').select('*');
    const paths = lessons.map(({id})=> ({
        params: {
            id: id.toString(),
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({param: {id}}) => {
    const {data: lessons} = await supabase.from('lesson').select('*').eq('id', id).single();
    return {
        props: {
            data: lesson
        }
    }
}

export default LessonsDetails;