const fetchData = async (repo) => {
  try {
    const response = await fetch(`https://api.github.com/repos/RESx/${repo}`, {
      headers: {
        Authorization:
          "Basic ZDg2MWQ0ZjA4ZDc3NzAwNDBhMmI6ZDM4MWYyNmY1ZjFiYTRlODE2ZDViYWEyNDRiNDcxNzgzZjBlODE5NA==",
      },
    });

    if (!response.ok) return null;
    const data = await response.json();

    return { data };
  } catch {
    return null;
  }
};

const showDate = (repo) => {
  fetchData(repo).then((response) => {
    if (!response) {
      document.getElementById("date-" + repo).innerHTML = "";
      return;
    }

    const updatingDate = new Date(response.data.updated_at);
    const nowDate = new Date();
    const diff = (nowDate - updatingDate) / 1000; // converted from milliseconds to seconds
    var output;

    if (diff < 60) {
      output = "Updated " + Math.floor(diff) + " second";
      if (Math.floor(diff) != 1) output += "s";
      output += " ago";
    } else if (diff < 3600) {
      // less than one hour
      diff = diff / 60; // convert to minutes
      output = "Updated " + Math.floor(diff) + " minute";
      if (Math.floor(diff) != 1) output += "s";
      output += " ago";
    } else if (diff < 86400) {
      // less than one day
      diff = diff / 3600; // convert to hours
      output = "Updated " + Math.floor(diff) + " hour";
      if (Math.floor(diff) != 1) output += "s";
      output += " ago";
    } else if (diff <= 86400 * 30) {
      // less than or equal 30 days
      diff = diff / 86400; // convert to days
      output = "Updated " + Math.floor(diff) + " day";
      if (Math.floor(diff) != 1) output += "s";
      output += " ago";
    } else {
      output =
        "Updated on " + updatingDate.toLocaleString("en-GB").split(",", 1);
    }

    // Add the output to the required element
    document.getElementById("date-" + repo).innerHTML += output;
  });
};
