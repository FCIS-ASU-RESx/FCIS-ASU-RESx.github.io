const id = 'd861d4f08d7770040a2b'
const secret = 'd381f26f5f1ba4e816d5baa244b471783f0e8194'

const fetchData = async(repo) => {
    const api_call = await fetch(`https://api.github.com/repos/RESx/${repo}?client_id=${id}&client_secret=${secret}`)
    const data = await api_call.json()
    return { data }
}

const showDate = (repo) => {

    fetchData(repo).then((response) => {

        var updatingDate = new Date(response.data.updated_at)
        var nowDate = new Date()
        var diff = (nowDate - updatingDate) / 1000 // converted from milliseconds to seconds
        var output

        if (diff < 60){
            output = 'Updated ' + Math.floor(diff) + ' second'
            if (Math.floor(diff) != 1) output += 's'
            output += ' ago'
        }
        else if (diff < 3600){ // less than one hour
            diff = diff / 60 // convert to minutes
            output = 'Updated ' + Math.floor(diff) + ' minute'
            if (Math.floor(diff) != 1) output += 's'
            output += ' ago'
        }
        else if (diff < 86400){ // less than one day
            diff = diff / 3600 // convert to hours
            output = 'Updated ' + Math.floor(diff) + ' hour'
            if (Math.floor(diff) != 1) output += 's'
            output += ' ago'
        }
        else if (diff <= 86400*30){ // less than or equal 30 days
            diff = diff / 86400 // convert to days
            output = 'Updated ' + Math.floor(diff) + ' day'
            if (Math.floor(diff) != 1) output += 's'
            output += ' ago'
        }
        else{
            output = 'Updated on ' + updatingDate.toLocaleString("en-GB").split(',', 1)
        }

        // Add the output to the required element
        document.getElementById("date-" + repo).innerHTML += output
    })

}