#!/bin/bash
docker compose --env-file .env_dev.template up -d
docker compose -f compose.yaml up -d --build
