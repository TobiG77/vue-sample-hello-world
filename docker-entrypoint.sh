#!/bin/bash

set -euo pipefail
set -x

[ "$DOCKER_CONTAINER" == "true" ] && yarn install

exec $@
