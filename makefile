default: all

all: b9 $(b9_programs)

programs = b9
b9_objects = main.o b9jit.o
b9_programs = program.so bench.so test.so

omr_srcdir := ./omr
IJIT = $(omr_srcdir)/jitbuilder/release/include
IJIT1 = $(IJIT)/compiler
LIB=$(omr_srcdir)/jitbuilder/release/libjitbuilder.a

cflags = -std=c++11 -fPIC -fno-rtti
b9: cflags+=-ldl -lm -I./omr/compiler/ $(LIB)
b9jit.o: cflags+=-I$(IJIT) -I$(IJIT1)
b9: $(b9_objects)

%.o : %.cpp
	$(CXX) -o $@ -c $< $(cflags) $(CFLAGS)

%.cpp: %.src
	node b9.js $^ > $@

%.so: %.o
	$(CXX) -std=c++11 -shared -o $@ $^ $(CFLAGS)

$(programs):
	$(CXX) -o $@ -lm $^ -ldl $(cflags) $(CFLAGS)

$(LIB):
	(cd $(omr_srcdir)/jitbuilder; make)
	
#install: node_modules/esprima/package.json

program: b9 b9.js program.src
	npm install
	node b9.js program.src >program.cpp
	$(CXX) -std=c++11  -shared -o program.so program.cpp
	./b9 program.so

bench: b9 bench.so
	time  ./b9

test: b9 test.so
	./b9 test.so

gdbprogram: b9 program.so
	gdb -q --args ./b9 program.so

gdbbench: b9 bench.so
	gdb -q --args ./b9 bench.so

gdbtest: b9 test.so
	gdb -q --args ./b9 test.so

clean:
	$(RM) b9
	$(RM) $(b9_objects)
	$(RM) $(b9_programs)
	$(RM) $(patsubst %.so,%.src.cpp,$(b9_programs))
omr:
	if [ -d ../omr ]; then ln -s ../omr ./omr; else git clone git@github.com:eclipse/omr.git; fi

.PHONY: program bench test clean
