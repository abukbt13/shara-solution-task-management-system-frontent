import {onMounted, ref} from "vue";
import axios from "axios";
/*
this code is from headers which is global
 */
import { headers, token } from '@/composable/headers';

const weeklygoal = ref ('')
const Yearly_goal = ref ('')
const randomWeekGoals = ref('');
const year_gooals = ref('');

export function goalsData(){

    const saveWeeklyGoal = async () =>{
        const formData = new FormData();

        formData.append('goal', weeklygoal.value);


        const res = await axios.post('http://127.0.0.1:8000/api/create_goal', formData, { headers });
        if (res.status === 200) {
            alert('success you created a goal')
        }
    }

    const YearlyGoal = async () =>{
        const formData = new FormData();
        formData.append('goal', Yearly_goal.value);
        const res = await axios.post('http://127.0.0.1:8000/api/create_yearly_goal', formData, { headers });
        if (res.status === 200) {
            alert('success you created a goal')
        }
    }

    const getRandomWeekGoals= async () =>{
        const response = await axios.get('http://127.0.0.1:8000/api/getRandomWeekGoal');
        if (response.status === 200) {
            randomWeekGoals.value = response.data;
        }
    }

    const getRandomyearGoals= async () =>{

        const response = await axios.get('http://127.0.0.1:8000/api/getRandomYearGoal');
        if (response.status === 200) {
            year_gooals.value = response.data;
        }
    }
    onMounted(() =>{
        getRandomWeekGoals()
        getRandomyearGoals()
    })

    return{weeklygoal,saveWeeklyGoal,YearlyGoal,Yearly_goal, year_gooals,randomWeekGoals,getRandomyearGoals,getRandomWeekGoals}
}