

function getIssues() {
  const repo = 'cpan001/javascript-fetch-lab'
  fetch(`javascript-fetch-lab/issues`,
  { method: "get",
    headers: {Authorization: `token ${getToken()}`}
  }
).then(res => res.json()).then( json => {
  console.log(json)
  const issues = document.getElementById("issues")
  issues.innerHTML = `Get Issues
    <ul>${json.map(function(i){return '<li>' +i.title+ '</li>'}).join("")}
    </ul>
  `
  })

}

function showIssues(json) {
}

function createIssue() {
  const repo = 'cpan001/javascript-fetch-lab'
  const fetchLink = `https://api.github.com/repos/${repo}/issues`
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(`javascript-fetch-lab/issues`, {
    method: "post",
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
).then(res => console.log(res))
}


function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => {
    const forkLink = document.createElement("a")
    forkLink.href = json.html_url
    forkLink.innerText = json.html_url
    const results = document.getElementById("results")
    results.appendChild(forkLink)
    })

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
