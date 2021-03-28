<h1>BUNK MANAGER</h1>
 
 ![Screenshot (138)](https://user-images.githubusercontent.com/49809895/100523828-770df600-31d9-11eb-9319-b5ac958f5d9b.png)

# Tech-Stack 
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>  <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Nodejs" src="https://img.shields.io/badge/Node.js-%234ea94b.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>

### Other Libraries
<img alt="JsonWebTokens" src="https://img.shields.io/badge/jsonwebtokens-%5E8.5.1-yellow"/> <img alt="Bcryptjs" src="https://img.shields.io/badge/bcryptjs-%5E2.4.3-orange"/> <img alt="nodemon" src="https://img.shields.io/badge/nodemon-%5E2.0.6-blue"/> <img alt="concurrently" src="https://img.shields.io/badge/concurrently-%5E5.3.0-blueviolet"/>

# How To Run the Project

## There are two ways to install the project:

### 1. Conventional Way


***1.*** Open Project Folder</br>

***2.*** To install all dependencies open Command Prompt and run
```
npm i
```
***3.*** To install all client dependencies open client folder and again run 
 ```
 npm i
 ```
***4.*** To run the server-
```
npm run server
```
***5.*** To run the client-
```
npm run client
```
***6.*** To run both server and client- Recommended 
```
npm run dev
```

### 2. Using Docker

* Install [Docker](https://docs.docker.com/engine/install/), from the given link.

* Once Docker is installed, use the following two commands to run the app in the root dicrectory:
  * `docker-compose build` , This command will build the project
  * `COMPOSE_HTTP_TIMEOUT=200 docker-compose up`, This command will run the container.
  
* You can open the project on `localhost:3000` on the machine.

Note: If you are using docker-desktop on Windows Or WSL2 i.e Windows Subsystem For Linux, you can use the GUI Options to run the containers 


# To start contributing, follow the below guidelines and [Code of Conduct](CODE_OF_CONDUCT.md): 

**1.**  Fork [this](https://github.com/ADRE9/bunk-manager-mern.git) repository.

**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/bunk-manager-mern.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd bunk-manager-mern
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/ADRE9/bunk-manager-mern.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are supposed to make a PR to.


**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.


**14.** Click on `Create Pull Request`.

### Landing Page prototype

https://www.figma.com/file/dQbGpSkclUec07vztFkUEV/Material-Design-UI-kit-Components-library-Community?node-id=120%3A1658


<!--## Open Source Program this project have been associated with: 

<!--<p align="center">
<a href="https://gssoc.girlscript.tech/"><img src="https://scholarsxp.com/wp-content/uploads/2021/02/gssoc-thumbnai-min.png" width= "25%"/></a>
</p>-->
## Contributor:
### Credits goes to these  people: ✨
<table>
	<tr>
		<td>
			<a href="https://github.com/ADRE9/bunk-manager-mern/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ADRE9/bunk-manager-mern" />
</a>
		</td>
	</tr>
</table>

<p>Live version also available <a href="https://salty-brook-29410.herokuapp.com/">HERE</a></p>
