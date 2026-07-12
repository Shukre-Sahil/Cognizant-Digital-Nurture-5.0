import './App.css';

import CourseDetails from "./Components/CourseDetails";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";

function App() {

    const showCourse = true;
    const showBook = true;
    const showBlog = true;

    return (

        <div className="container">

            {/* Method 1 : && Operator */}

            <div className="box">
                {showCourse && <CourseDetails />}
            </div>

            {/* Method 2 : Ternary Operator */}

            <div className="box">
                {showBook ? <BookDetails /> : <h2>No Books Available</h2>}
            </div>

            {/* Method 3 : Variable */}

            <div className="box">

                {
                    (() => {

                        let output;

                        if (showBlog)
                            output = <BlogDetails />;
                        else
                            output = <h2>No Blogs</h2>;

                        return output;

                    })()
                }

            </div>

        </div>

    );
}

export default App;