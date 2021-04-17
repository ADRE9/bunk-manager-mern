// Card Util to display the cards in Subject Page
import Grid from '@material-ui/core/Grid';
import SubjectCard from '../components/UI/Cards/SubjectCard';

export const classCard = (props) => props.subjects.map(subject => {
  if (subject.subjectType === 'regular') {
    return (
      <Grid item xs={12} sm={4} md={3} key={subject._id}>
        <SubjectCard data={subject}/>
      </Grid>
    )
  } else return null;
});

export const labCard = (props) => props.subjects.map(subject => {
  if (subject.subjectType === 'lab') {
    return (
      <Grid item xs={12} sm={4} md={3} key={subject._id}>
        <SubjectCard data={subject}/>
      </Grid>
    )
  } else return null;
});