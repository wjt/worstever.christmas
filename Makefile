.PHONY: all src/urls.js

all: index.js

clean:
	rm -f src/urls.js

index.js: src/head.js src/piwik.js src/urls.js src/main.js src/tail.js
	cat $^ > $@

src/urls.js:
	./make_urls.py > $@.tmp && mv $@.tmp $@
