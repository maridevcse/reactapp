import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const data =[{ img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
   { img:"https://wallpaperaccess.com/full/3635104.jpg"},
  ]

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
     {data.map((el,i)=><Post title={"Post "+(i+1)} img={el.img}></Post>)}
    </Container>
  );
};

export default Feed;
