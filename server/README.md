# Server

## Start scripts

*Before starting, it is necessary to create the <kbd>.venv</kbd> folder to start the development environment locally*

```sh
mkdir .venv
```
*You need to change the sample file name to a usable one*

```sh
mv .venv.example .venv
```

## Environment scripts

*To start the development environment, run the following command*

```sh
pipenv shell
```
*To install all dependencies run the following command:*

```sh
pipenv sync
```

## Run scripts

*Note that the FLASK_APP environment variable must be set according to the Flask documentation for this command to work.*

```sh
export FLASK_APP=main.py
```
*With the above application you can create the database or enable migrations if the database already exists with the following command:*

```sh
flask db init
```
*You can then generate an initial migration:*

```sh
flask db migrate
```
*Then you can apply the migration to the database:*

```sh
flask db upgrade
```
*To run the application execute the following command:*

```sh
flask run
```