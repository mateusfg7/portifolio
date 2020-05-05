FROM gitpod/workspace-full:latest

RUN node --version >> DOCKERT_TEST.txt \
  && yarn --version >> DOCKERT_TEST.txt
