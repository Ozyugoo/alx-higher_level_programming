#!/usr/bin/python3
""" A function that replaces all occurrences of an element """
def search_replace(my_list, search, replace):


    new_list = []
    for i in my_list:
        if i == search:
            new_list.append(replace)
        else:
            new_list.append(i)
    return new_list
