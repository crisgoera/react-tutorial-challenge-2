import { useState, useEffect} from 'react';
import './App.css';
import DisplayContent from './DisplayContent';
import Header from './Header';

function App() {
    // API URL address
    const API_URL = 'https://jsonplaceholder.typicode.com/';

    // State declaration

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [displayContent, setDisplayContent] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect on loading to retrieve all data on app loading.
    useEffect(() => {
        const fetchUsers = async ()=> {
            try {
                const response = await fetch(`${API_URL}/users`);
                if (!response.ok) throw Error('Did not receive expected data');
                const listUsers = await response.json();
                setUsers(listUsers);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        const fetchPosts = async ()=> {
            try {
                const response = await fetch(`${API_URL}/posts`);
                if (!response.ok) throw Error('Did not receive expected data');
                const listPosts = await response.json();
                setPosts(listPosts);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        const fetchComments = async ()=> {
            try {
                const response = await fetch(`${API_URL}/comments`);
                if (!response.ok) throw Error('Did not receive expected data');
                const listComments = await response.json();
                setComments(listComments);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        const fetchAllContent = async()=> {
            fetchUsers();
            fetchPosts();
            fetchComments();
        }

        setTimeout(() => {
            (async () => await fetchAllContent())();
        }, 2000);
    }, [])

    const handleDisplay = (contentType) => {
        switch (contentType) {
            case 'posts':
                setDisplayContent(posts);
                break;
            case 'comments':
                setDisplayContent(comments)
                break;
            default:
                setDisplayContent(users);
        }
    }

    return (
        <div className="App">
            <Header
                handleDisplay = {handleDisplay}
            />

            <main>
                {isLoading && <p>Loading content...</p>}
                {fetchError && <p style = {{color: 'red'}}>{`Error: ${fetchError}`}</p>}
            </main>

            <div>
                {displayContent && <DisplayContent
                    displayContent = {displayContent}
                />}
            </div>
        </div>
    );
}

export default App;
