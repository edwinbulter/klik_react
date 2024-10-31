import {fetchAuthSession} from 'aws-amplify/auth';

const BASE_URL = "https://ub0h6c0f8k.execute-api.eu-central-1.amazonaws.com/dev";

async function getAccessToken() {
    const session = await fetchAuthSession();
    return session.tokens.accessToken.toString();
}

const incrementCounter = async(userName) => {
    const data = {"user_id": userName}
    const accessToken = await getAccessToken();
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body: JSON.stringify(data)
        })
        const counterValue =  await response.json();
        return counterValue;
    } catch (error) {
        console.log(`Cannot incrementCounter because: ${error.message}`);
        throw new Error(`Cannot incrementCounter because: ${error.message}`);
    }
}

async function getCounter(userName) {
    let data = {"user_id": userName}
    const accessToken = await getAccessToken();
    const response = await fetch(`${BASE_URL}/getCounter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
    const counterValue =  await response.json();
    return counterValue;
}

async function getAllCounters() {
    const response = await fetch(`${BASE_URL}/getAllCounters`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const counters =  await response.json();
    return counters;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    incrementCounter, getCounter, getAllCounters
}