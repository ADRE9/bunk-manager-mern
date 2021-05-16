import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 6, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(6),
  },
  cardGrid: {
    
  },
  card: {
    marginLeft: '100px', 
    padding: theme.spacing(1),
    height: '100%',
    padding: '50px',
    right: '20px',
    left: '20px'
  },
  cardMedia: {
    paddingTop: '59.25%', // 16:9
  },
  cardContent: {
    flexGrow: 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10),
  },
}));


const cards1 = [1];

const cards2 = [1];

const cards3 = [1];

const cards4 = [1];

export default function TodayPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={12} justify="center">
                <TableHead style={{ minWidth: 190 }}>
                    <TableRow style={{padding: "10px"}}>
                        <TableCell colSpan={6}>
                            <Grid item>
                                <h1 style={{color: "blue"}}>
                                CLASSES
                                </h1>
                            </Grid>
                        </TableCell>
                        <TableCell>
                            <Grid item>
                                <h1 style={{color: "blue"}}>
                                LABS
                                </h1>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableHead>
                
                
              </Grid>
            </div>

            {/* <div style={{transform: [{ rotate: '180deg' }]}} className={classes.heroButtons}>
              <Grid container spacing={12} justify="center">
                <TableHead style={{ minWidth: 190 }}>
                    <TableRow style={{padding: "10px"}}>
                        <TableCell colSpan={6}>
                            <Grid item >
                                <h1 style={{color: "blue"}}>
                                ON TRACK
                                </h1>
                            </Grid>
                        </TableCell>
                        <TableCell>
                            <Grid item>
                                <h1 style={{transform: [{ rotate: '90deg' }]}}>
                                BEHIND
                                </h1>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableHead>
                
                
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <TableBody className="mx-auto ml-5 ml-lg-0" >
            {/* End hero unit */}
            
            <TableRow>
            <TableCell>
            <Grid container spacing={4}>
                {cards3.map((card) => (
                <Grid item key={card} xs={18} sm={20} md={18}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Python
                        </Typography>
                        <Typography>
                          68%
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        View
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </TableCell>
            <TableCell>
            <Grid container spacing={4}>
                {cards3.map((card) => (
                <Grid item key={card} xs={18} sm={18} md={18}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Chemistry
                        </Typography>
                        <Typography>
                          88%
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        View
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <Grid container spacing={4}>
                {cards3.map((card) => (
                <Grid item key={card} xs={18} sm={20} md={18}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        History
                        </Typography>
                        <Typography>
                          48%
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        View
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </TableCell>
            <TableCell>
            <Grid container spacing={4}>
                {cards3.map((card) => (
                <Grid item key={card} xs={18} sm={18} md={18}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Java
                        </Typography>
                        <Typography>
                          45%
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        View
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </TableCell>
            </TableRow>
            </TableBody>
        </Container>
      </main>
    </React.Fragment>
  );
}