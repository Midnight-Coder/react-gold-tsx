#!/usr/bin/env sh

if [[ -z "$API_HOST" ]]; then echo "Error: API_HOST not set"; exit 1; fi

grep -rl "__API_HOST__" /usr/share/nginx/html/static/js/ | xargs sed -i s@"__API_HOST__"@"$API_HOST"@g

exec "$@"
