FROM node
RUN mkdir /app/
RUN cd /app && npm install pouchdb fs-extra
ADD ./replicate.js /app/replicate.js
ENTRYPOINT cd /app/ && node replicate.js 
