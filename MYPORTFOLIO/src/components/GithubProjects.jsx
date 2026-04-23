import { useEffect, useState } from "react";

function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/honeybadger26guy/repos")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data
      .filter(repo => !repo.fork && repo.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0,6);

      setRepos(filtered)
    });
  }, []);

  return(
    <section className="github">
      <h2>More Projects (GitHub)</h2>

      <div className="project-grid">
        {repos.map((repo) => (
          <div className="card" key={repo.id}>
            <h3>{repo.name}</h3>

            <p>{repo.description}</p>

            <div className="buttons">
              <a href="{repo.html_url}" target="_blank">
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GithubProjects;