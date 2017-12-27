#!/usr/bin/env python3
import json
import os


def main():
    _, _, files = next(os.walk("img"))
    print("var urls = {};".format(json.dumps(files)))


if __name__ == '__main__':
    main()
