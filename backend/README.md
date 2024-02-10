#Scoreboard - template backend,

#### Run App on local machine:

##### Install local dependencies:

-   `yarn install`

---

##### Adjust local db:

Windows:

1. Download MySQL database server from the following link: ([http://dev.mysql.com/downloads/installer/](http://dev.mysql.com/downloads/installer/)).
2. Install the package and select Server Machine as the configuration type.

#### Api Documentation (Swagger)

http://localhost:8081/api-docs (local host)

http://host_name/api-docs

---

##### Setup database tables or update after schema change

-   `yarn db:migrate`

##### Seed the initial data (admin accounts, relevant for the first setup):

-   `yarn db:seed`

##### Start build:

-   `yarn start`
