#!/bin/bash

# Copyright IBM Corp. 2022, 2022

# Support package installation with personal access token instead of Artifactory or SSH key.
STREAM_EDITOR_INPUT="s#ssh://git@github.ibm.com:#https://$GITHUB_TOKEN@github.ibm.com/#g"

for stream_editor_file in package.json package-lock.json; do

    sed -i $STREAM_EDITOR_INPUT $stream_editor_file
done

# remove the old version of the common module
rm -rf node_modules/cdai-microsite-common-module
