// Card Util to display the cards in Home Page
import Grid from '@material-ui/core/Grid';
import SubjectCard from '../components/UI/Cards/SubjectCard';
const date = new Date();
const NumtoDay = {
    1: 'monday', 
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday'
}

//subject.days.includes(NumtoDay[date.getDay()]) to check if days includes the current day

export const classCard = (props) => props.subjects.map(subject => {

  if (subject.subjectType === 'regular' && subject.days.includes(NumtoDay[date.getDay()])) {
    return (
      <Grid item xs={12} sm={4} md={3} key={subject._id}>
        <SubjectCard data={subject}/>
      </Grid>
    )
  } else return null;
});

export const labCard = (props) => props.subjects.map(subject => {
  if (subject.subjectType === 'lab' && subject.days.includes(NumtoDay[date.getDay()])) {
    return (
      <Grid item xs={12} sm={4} md={3} key={subject._id}>
        <SubjectCard data={subject}/>
      </Grid>
    )
  } else return null;
});
