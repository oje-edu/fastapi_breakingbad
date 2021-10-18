# Breakingbad API in german Language

![GitHub last commit](https://img.shields.io/github/last-commit/oje-edu/fastapi_breakingbad) ![GitHub repo size](https://img.shields.io/github/repo-size/oje-edu/fastapi_breakingbad)

_IN DEVELOPMENT_

- [Backend](https://bbdevapi.oje.guru/docs) ![Backend](https://img.shields.io/website?down_color=red&down_message=offline&style=plastic&up_color=lime&up_message=online&url=https%3A%2F%2Fbbdevapi.oje.guru/docs)
- [Frontend](https://breakingbad.noconcept.dev/) ![Frontend](https://img.shields.io/website?down_color=red&down_message=offline&style=plastic&up_color=lime&up_message=online&url=https%3A%2F%2Fbreakingbad.noconcept.dev)

## Backend Requirements

- python3
- mysql/mariadb

## Install

- `git clone` this repo
- Linux
  - `python3 -m venv .venv`
  - `source .venv/bin/activate`
- Windows
  - `python -m venv .venv`
  - `source .venv\Scripts\activate`
- `pip install -r requirements.txt`
- rename the `.env-sample` file to `.env` and enter your Databasedetails

## run local

- `uvicorn main:app --reload`
- visit [http://localhost:8000/docs](http://localhost:8000/docs)

## nginx service

- create a systemd service file

`nano /etc/systemd/system/fastapi-breakingbad.service`

_i will run gunicorn on port 8003_

- paste this in:

```bash
[Unit]
Description=Gunicorn instance to serve FASTAPI Breakingbad
After=network.target

[Service]
User=losername
Group=www-data
WorkingDirectory=/home/losername/fastapi_breakingbad
Environment="PATH=/home/losername/fastapi_breakingbad/.venv/bin"
ExecStart=/home/losername/fastapi_breakingbad/.venv/bin/gunicorn -b 127.0.0.1:8003 -w 4 -k uvicorn.workers.UvicornWorker main:app

[Install]
WantedBy=multi-user.target
```

- Start the service

  `sudo systemctl start fastapi-breakingbad.service --now`

- Stop the service

  `sudo systemctl stop fastapi-breakingbad.service`

- Check the service

  `sudo systemctl status fastapi-breakingbad.service`

  ## Frontend
