VIRTUALENV = virtualenv
VENV := $(shell echo $${VIRTUAL_ENV-.venv})
PYTHON = $(VENV)/bin/python
INSTALL_STAMP = $(VENV)/.install.stamp

.IGNORE: clean distclean maintainer-clean
.PHONY: all install virtualenv tests

OBJECTS = .venv .coverage

all: install
install: $(INSTALL_STAMP) requirements.txt
$(INSTALL_STAMP): $(PYTHON)
	$(VENV)/bin/pip install -U pip
	$(VENV)/bin/pip install -Ur requirements.txt
	touch $(INSTALL_STAMP)

virtualenv: $(PYTHON)
$(PYTHON):
	virtualenv $(VENV)

clean:
	find . -name '*.pyc' -delete
	find . -name '__pycache__' -type d | xargs rm -fr
