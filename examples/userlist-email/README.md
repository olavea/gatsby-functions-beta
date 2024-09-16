<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=gatsby-functions-beta">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Functions Userlist Form Starter
</h1>

## 🚀 Quick start

1. Setup Userlist

    Create a new _ _ _ named `_ _ _` and create a _ _ _ with three _ _ _, "Name", "Email", and "Message".

1.  **Get Userlist Credentials.**

    There is **1** environment variable you'll need to add your project to properly run the starter:
    - `AIRTABLE_KEY`: Get your Userlist Push API Key. [https://app.userlist.com/settings/push](https://app.userlist.com/settings/push)

    You'll want to add this Push API Key as an environment variable when deploying to Gatsby Cloud. Don't forget to add your Push API Key to the Preview variables if you plan to add a CMS preview integration.


2.  **Start developing.**

    To get started, run `yarn` to add all necessary packages.

    When developing locally, you'll want to include the ENV variables in your `.env.development`. Read more about how Gatsby handles `.env` files and environment variables in the [Gatbsy Docs](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)


    ```shell
    cd userlist-email-collection
    yarn
    yarn run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000! You can use the UI on the index page to test the functions or directly access them at http://localhost:8000/api/userlist

    For this route, hitting the route with a POST request with the following body should submit a form response to your Userlist _ _ _:

    ```json
      {
        "name": "Sample Name",
        "email": "sample@example.com",
        "message": "Hello, World!"
      }
    ```

    Edit `src/pages/index.js` to see your site update in real-time!


4. **Deploy**

You can deploy this example on Gatsby Cloud by copying the example into a new repo and [connecting that to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).

<!--- Working on improving deploy now to use subdirectories
4.  **Deploy**
You can directly deploy this starter by using the Deploy button below and select the directory for the Userlist example. Otherwise, fork this repo and create your own repo and [connect that to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).

[<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-beta/)



[<img src="https://www.gatsbyjs.com/deploynow.svg">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-functions-beta/tree/main/examples/userlist-email-collection)

-->
