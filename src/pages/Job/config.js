import { workTypeFormatting, jobDaysFormatting } from '../../utils/stringFormatting';
import calculateDaysFromNow from '../../utils/calculateDates';

const config = {
    genegateInfoArray: state => [
        {
            title: 'Company: ',
            payload: state.company_name,
        },
        {
            title: 'Location: ',
            payload: state.candidate_required_location,
        },
        {
            title: 'Job category: ',
            payload: state.category,
        },
        {
            title: 'Job type: ',
            payload: workTypeFormatting(state.job_type),
        },
        {
            title: 'Published: ',
            payload: jobDaysFormatting(calculateDaysFromNow(state.publication_date)),
        },
        {
            title: '',
            payload: state.salary,
        },
    ],
};

export default config;
