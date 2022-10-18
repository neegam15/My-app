import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from "axios";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;



const api = `http://localhost:8800/api/videos/random`;



const Home = () => {
    const [videos, setVideos] = useState([]);
  
    // useEffect(() => {
    //   const fetchVideos = async () => {
    //     const res = await api.get(`/videos/random`).then(res => {
    //       console.log(res.data)
    //   }).catch(err => {
    //       // Handle error
    //       console.log(err);
    //   });
    //     // setVideos(res.data);
    //   };
    //   fetchVideos();
    // }, );

    useEffect(() => {
      axios.get(api).then(res => {
              console.log(res.data)
          }).catch(err => {
              // Handle error
              console.log(err);
          });
    }, []);
  


    return (
        <Container>

{/* {videos.map((video) => (
      //   <>
      //   <h1>{video._id}</h1>
      //   <h1>{video.userId}</h1>
      //   <h1>{video.title}</h1>
      // </>
      <Card type="trend"/>
      ))}  */}
            <>
            <h1>Dhjfd</h1>
            </>
            

        </Container>
      );
    };
  
  export default Home;