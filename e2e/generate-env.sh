#!/usr/bin/env bash
# .env.local.secret generator
#

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

ANDROID=${ANDROID:-"false"}
END_TO_END_TESTS_EMAIL_ADDRESS=${END_TO_END_TESTS_EMAIL_ADDRESS}
SENDINBLUE_API_KEY=${SENDINBLUE_API_KEY}

# shellcheck disable=SC2002
eval "$(cat "${SCRIPT_DIR}/.env.local.secret.tpl" | sed 's/"/+++/g'|sed  's/^\(.*\)$/echo "\1"/')" |sed 's/+++/"/g'|sed 's;\\";";g' > "${SCRIPT_DIR}/.env.local.secret"

