FROM node:carbon

ENV NODE_ENV=dev

# Application environment
ENV WORKING_DIR '/application'

WORKDIR $WORKING_DIR

RUN DEBIAN_FRONTEND=noninteractive \
   && apt update \
   && apt install -q -y inotify-tools

CMD /bin/bash