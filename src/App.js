import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchMovies from "./components/WatchVideos";
import VideoContainer from "./components/VideoContainer";

function App() {
  const appRouter = createBrowserRouter([
   { 
    path:"/youtube-clone",
    element:<MainContainer/>,
    children:[
      {
      path:"/youtube-clone",
      element:<VideoContainer/>
    },
     {
      path:"/youtube-clone/watch",
      element:<WatchMovies/>
     }
    ]
  }
  ])
  return (
    
    <div className="App">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
