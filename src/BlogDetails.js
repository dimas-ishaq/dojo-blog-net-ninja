import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';
const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data: blogs, isPending, isError} = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleDelete = async () => {
        await fetch(`http://localhost:8000/blogs/${blogs.id}`, {
            method: 'DELETE',
        }).then(()=> history.push('/'))
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {isError && <div>{isError}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <p>{blogs.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
      );
}
 
export default BlogDetails;