(() => {
    /*the toggle menu icon and the required actions*/
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggler = document.getElementById('menuToggler');
        const menu = document.querySelector('.navbar .menu');
        const menuLinks = document.querySelectorAll('.navbar .menu li a');


        menuToggler.addEventListener('click', ev => {
            menu.classList.toggle('open');
            menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                menu.classList.remove('open'); // Close the toggle menu
                menuToggler.textContent = '≡'; // Reset the toggle menu icon
            });
        });
    });


    /*scroll to the top */
    /*
    Event listener for when the DOM content is fully loaded. 
    It adds event listener for scrolling, handling navbar background change and scroll-up button visibility.
    */
    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
            // background navbar on scroll script
            if (window.scrollY > 80) {
                document.querySelector('.navbar').classList.add("background");
            } else {
                document.querySelector('.navbar').classList.remove("background");
            }

            // scroll-up button show/hide script
            if (window.scrollY > 500) {
                document.querySelector('.scroll-up-btn').classList.add("show");
            } else {
                document.querySelector('.scroll-up-btn').classList.remove("show");
            }
        });
    });

    document.querySelector('.scroll-up-btn').addEventListener('click', function () {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Removing smooth scroll behavior on slide-up button click
        document.documentElement.style.scrollBehavior = 'auto';
    });




    /*Downloading cv*/
    document.addEventListener('DOMContentLoaded', function () {
        const downloadLink = document.getElementById('download-cv');

        downloadLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Replace this URL with the actual URL of your CV file
            const cvUrl = 'cv/richard-kankam.pdf';

            // Create a new anchor element
            const anchor = document.createElement('a');
            anchor.href = cvUrl;
            anchor.download = 'Richard Kankam\'s cv.pdf';

            // Append the anchor element to the document body
            document.body.appendChild(anchor);

            // Click the anchor element to trigger the download
            anchor.click();

            document.body.removeChild(anchor);
        });
    });

    //GitHub Api
    /**
     * This function fetches repositories from my GitHub. It uses the GitHub API to get the 
     * public repositories of the supplied username
     * @param {kilobyte1} username //this is so the user name can easily be changed
     * @returns 
     */
    async function loadRepositories(username) {
        // Construct the URL for fetching repositories from GitHub API
        const url = `https://api.github.com/users/${username}/repos`;
        // Fetch data from the URL
        const response = await fetch(url);
        // Return JSON data
        return response.json();
    }

    /**
     * This function builds a card element for a repository.
     * I will select a few elements from the JSON data returned
     * @param {*} repo 
     * @returns 
     */

    async function buildRepositoryCard(repo) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.url = repo.html_url;

        const title = document.createElement("h3");
        title.textContent = repo.name;

        const description = document.createElement("p");
        description.textContent = repo.description || "No description provided";

        const languages = await getRepositoryLanguages(repo);
        const languageList = document.createElement("p");
        languageList.textContent = `Languages: ${languages.join(", ")}`;

        const stars = document.createElement("p");
        stars.textContent = `Stars: ${repo.stargazers_count}`;

        const forks = document.createElement("p");
        forks.textContent = `Forks: ${repo.forks_count}`;

        // Dynamically adding a GitHub icon to the cards
        const githubIcon = document.createElement("img");
        githubIcon.setAttribute('src', './img/github-logo-24.png');
        githubIcon.setAttribute('alt', 'gitHub icon')


        // Append the GitHub icon and all other elements to the card
        card.appendChild(githubIcon);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(languageList);
        card.appendChild(stars);
        card.appendChild(forks);

        // Add an event listener to the card to open the repository page when clicked
        card.addEventListener("click", () => {
            window.open(repo.html_url, "_blank");
        });

        return card;
    }

    /**
     * his is an asynchronous function named 
     * that takes a repository object (repo) as its parameter.
     * @param {*} repo 
     * @returns 
     */
    async function getRepositoryLanguages(repo) {
        const url = repo.languages_url;
        const response = await fetch(url);
        const data = await response.json();
        return Object.keys(data);
    }
    /**
     * Async function to display repositories for any username given
     * @param {*} username - The GitHub username where the repos will be coming from
     */
    async function displayRepositories(username) {
        //point to the section or div
        const repositoriesContainer = document.getElementById("repos");

        try {
            // Loading repositories for the specified username
            const repositories = await loadRepositories(username);
            //loop through the data and build the card for each
            repositories.forEach(async repo => {
                const repositoryCard = await buildRepositoryCard(repo);
                repositoriesContainer.appendChild(repositoryCard);
            });
        } catch (error) {
            console.error("Error fetching repositories:", error);
            //if there is an error, the portfolio will notify of an error aside the error displayed in the console
            repositoriesContainer.textContent = "Error fetching repositories. Please try again later.";
        }
    }

    displayRepositories("kilobyte1");

    //fetching data from the contact form to an excel document
    // const form = document.getElementById('sendMessage');
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(form);

    //     console.log("Form Data:");
    //     formData.forEach((value, key) => {
    //         console.log(key, value);
    //     });
    // })

    //get the contact form details into a google sheet by indirectly using the Google Apps Script API
    const sheetScript = 'https://script.google.com/macros/s/AKfycbxhwXLZDBXUqqhesmQQ1SPN01LWwUrDPNuzvxtGVpSCZNORmXUC3U89J9djx06RHdPn/exec'
    const form2 = document.forms['sendMessage']
    form2.addEventListener('submit', (e) => {
        e.preventDefault()

        fetch(sheetScript, {
            method: 'POST',
            body: new FormData(form2)
        })
            .then(() => {
                clearForm();
                customAlert.style.display = 'block';
                setTimeout(() => {
                    customAlert.style.display = 'none';
                }, 5000);
            })
            .catch(error => console.error("Error", error.message));

        //function to clear the form inputs
        function clearForm() {
            for (let element of form2.elements) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = '';
                }
            }
        }
    });

    //restricting the message text area to a word count

    const textarea = document.getElementById('message');
    const wordCountDisplay = document.getElementById('wordCount');

    let maxWords = 250;

    textarea.addEventListener('input', function () {
        let wordCount = this.value.trim().split(/\s+/).length;
        let wordsLeft = maxWords - wordCount;

        if (wordsLeft >= 0) {
            wordCountDisplay.textContent = 'Words left: ' + wordsLeft;
            // change the color ot red when the count is less than 10
            wordCountDisplay.style.color = wordsLeft < 11 ? 'red' : '';
        } else {
            // If user exceeds maxWords, trim the text
            let trimmedText = this.value.trim().split(/\s+/).slice(0, maxWords).join(' ');
            this.value = trimmedText;
        }
    });
})()