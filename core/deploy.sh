#!/bin/bash

# Copyright IBM Corp. 2021, 2022

gh-pages -f -d public -r https://$GITHUB_TOKEN@github.ibm.com/$TRAVIS_REPO_SLUG.git
