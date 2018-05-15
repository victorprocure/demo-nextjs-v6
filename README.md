# Welcome
This is a simple demo to explore [NextJS v6](https://nextjs.org).

My initial goal is to start with a clean slate and see how new features and functionality in [NextJS v6](https://nextjs.org) can be incorporated.

Ultimately, I would like to see this project have parity with my previous NextJS 5 demos - [demo-nextjs-v5-without-typescript](https://github.com/TheRobBrennan/demo-nextjs-v5-without-typescript) and [demo-nextjs-v5](https://github.com/TheRobBrennan/demo-nextjs-v5). 

# Getting started
## Initial setup and installation
To get started with [NextJS v6](https://nextjs.org), all you need to do is clone this repo and run the install script:

    $ git clone git@github.com:TheRobBrennan/demo-nextjs-v6.git
    $ cd demo-nextjs-v6
    $ npm install

## Start your local development server
Once you have cloned the repo and installed the required dependencies, you can start NextJS by running:

    $ npm run dev

Once you see `> Ready on http://localhost:3000`, you can view your app at [http://localhost:3000](http://localhost:3000)

TIP: If you would like to run your application on a port other than the default `3000`, you can run:

    $ npm run dev -- -p <your port here>

Your development server will constantly reload as changes are made to your app.

# Deployment
One goal of this project will be to explore the cloud hosting service provided by Zeit - the creators of NextJS.

## Zeit Now
If you have not signed up for a free account at [Zeit Now](https://zeit.co/), please do so before continuing on with this guide.

To deploy this application to Zeit Now, you can run:

    $ npm run deploy:now

You should see output similar to:
```
> Deploying ~/repos/demo-nextjs-v6 under therobbrennan
> Using Node.js 8.11.1 (default)
> https://demo-nextjs-v6-omwahwlyce.now.sh [in clipboard] (sfo1) [2s]
> Synced 2 files (2.49KB) [2s]
> Building…
> ▲ npm install
> ✓ Using "package-lock.json"
> ⧗ Installing 3 main dependencies…
> ✓ Installed 749 modules [7s]
> ▲ npm run build
> 
> demo-nextjs-v6@0.1.0 build /home/nowuser/src
> next build
> 
> ▲ Snapshotting deployment
> ▲ Saving deployment image (10.8M)
> Build completed
> Verifying instantiation in sfo1
> [0] 
> [0] demo-nextjs-v6@0.1.0 start /home/nowuser/src
> [0] next start
> [0] 
> ✔ Scaled 1 instance in sfo1 [13s]
> Success! Deployment ready
```

Zeit Now will give each deployment its own URL. In the above example, we can visit our application at [https://demo-nextjs-v6-omwahwlyce.now.sh](https://demo-nextjs-v6-omwahwlyce.now.sh)

For more information, please see the [Five Minute Guide](https://zeit.co/docs) for an overview on deploying to [Zeit Now](https://zeit.co/dashboard).

# Third party services
## Docker
As of this writing, you do not have to download or use Docker to run this project. However, if you have [Docker](https://www.docker.com) installed and configured on your development machine, you can spin up the project by running:

    $ npm run docker:up

To verify the server is running, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the application is running.

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

### BONUS: Docker scripts
I've included additional scripts that have been useful when working with Docker in previous projects.

You can run these with:

    $ npm run <script>

+ docker:destroy
    - This script will delete all of your Docker containers. If there is data not mapped locally, it **will be deleted**.

+ docker:nuke
    - This is the nuclear weapon. This command will delete **ALL** of your containers and images GLOBALLY. If you are using Docker with other projects on your machine, this command will nuke those, too!

+ docker:up:clean
    - This forces a clean build of the Docker images and containers.
