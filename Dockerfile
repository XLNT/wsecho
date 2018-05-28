FROM ubuntu:18.04

WORKDIR /app

COPY ./pkg/ .
RUN chmod +x -R .

ENTRYPOINT [ "./an-old-man-at-a-cafe-in-the-50s-linux" ]
