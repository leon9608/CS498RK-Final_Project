# coding: utf-8

# In[5]:


import sys
import getopt
import http.client
import urllib
import json
from random import randint
from random import choice
from datetime import date
from time import mktime


# In[33]:


def main(argv):
    # Server Base URL and port
    baseurl = "localhost"
    port = 4000

    # Python array containing name and email and password
    names = ['Kelvin', "james", "john", "robert", "michael", "william", "david", "richard", "charles", "joseph"]

    # Server to connect to (1: url, 2: port number)
    conn = http.client.HTTPConnection(baseurl, port)

    # HTTP Headers
    headers = {"Content-type": "application/json", "Accept": "text/plain"}

    # Array of user IDs
    userIDs = []
    userNames = []
    userEmails = []

    for i in range(len(names)):
        params = json.dumps(
            {'isStudent': 'false', 'name': names[i], 'email': names[i] + "@illinois.edu", 'password': '123'})

        # POST the user
        conn.request("POST", "/api/user/create", params, headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

        # Store the users id
        userIDs.append(str(d['data']['_id']))
        userNames.append(str(d['data']['name']))
        userEmails.append(str(d['data']['email']))

    graderPost = [
        {'userId': userIDs[0],
         'jobName': 'CS101 Intro Computing: Engrg & Sci grader',
         'salary': 1,
         'major': [5, 6, 7, 10],
         'standing': [1, 2, 3],
         'contactEmail': 'Davis@illinois.edu',
         'contactName': 'Davis, N',
         },
        {'userId': userIDs[0],
         'jobName': 'CS 126 Software Design Studio grader',
         'salary': 1,
         'major': [6],
         'standing': [0, 1, 2, 3],
         'contactEmail': 'Evans@illinois.edu',
         'contactName': 'Evans, G',
         },
        {'userId': userIDs[0],
         'jobName': 'CS 242 Programming Studio grader',
         'salary': 1,
         'major': [6],
         'standing': [1, 2, 3],
         'contactEmail': 'Woodley@illinois.edu',
         'contactName': 'Woodley, M',
         },
        {'userId': userIDs[0],
         'jobName': 'CS 357 Numerical Methods I grader',
         'salary': 1,
         'major': [5, 6, 10],
         'standing': [1, 2, 3],
         'contactEmail': 'Silva@illinois.edu',
         'contactName': 'Silva, M',
         },
        {'userId': userIDs[1],
         'jobName': 'CS 374 Introduction to Algorithms & Models of Computation assistants',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'Borisov@illinois.edu',
         'contactName': 'Borisov, N',
         },
        {'userId': userIDs[1],
         'jobName': 'CS 410 Text Information Systems grader',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'Zhai@illinois.edu',
         'contactName': 'Zhai, C',
         },
        {'userId': userIDs[1],
         'jobName': 'CS 412 Introduction to Data Mining grader',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'jiawei@illinois.edu',
         'contactName': 'Han, J',
         },
        {'userId': userIDs[1],
         'jobName': 'CS 413 Intro to Combinatorics grader',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'james@illinois.edu',
         'contactName': 'james, J',
         },
        {'userId': userIDs[2],
         'jobName': 'CS 450 Numerical Analysis',
         'salary': 1,
         'major': [5, 6, 10],
         'standing': [1, 2, 3],
         'contactEmail': 'Olson@illinois.edu',
         'contactName': 'Olson, L',
         },
        {'userId': userIDs[5],
         'jobName': 'CS498AML grader',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'William@illinois.edu',
         'contactName': 'William, K',
         },
        {'userId': userIDs[5],
         'jobName': 'CS 425 Distributed Systems grader',
         'salary': 1,
         'major': [5, 6, 7],
         'standing': [1, 2, 3],
         'contactEmail': 'Gupta@illinois.edu',
         'contactName': 'Gupta, I',
         },
        {'userId': userIDs[5],
         'jobName': 'CS 438 Communication Networks',
         'salary': 1,
         'major': [5, 6],
         'standing': [1, 2, 3],
         'contactEmail': 'AlHassani@illinois.edu',
         'contactName': 'Al-Hassanieh, H',
         },
        {'userId': userIDs[6],
         'jobName': 'CHEM 102 General Chemistry I grader',
         'salary': 1,
         'major': [1, 2, 3, 11],
         'standing': [0, 1, 2, 3],
         'contactEmail': 'Huang@illinois.edu',
         'contactName': 'Huang, T',
         },
        {'userId': userIDs[6],
         'jobName': 'CHEM 104 General Chemistry II grader',
         'salary': 1,
         'major': [1, 2, 3, 11],
         'standing': [0, 1, 2, 3],
         'contactEmail': 'Marville@illinois.edu',
         'contactName': 'Marville, K',
         },
        {'userId': userIDs[7],
         'jobName': 'PHYS 211 University Physics: Mechanics grader',
         'salary': 1,
         'major': [0, 4, 8, 9, 12],
         'standing': [0, 1, 2, 3],
         'contactEmail': 'Gadway@illinois.edu',
         'contactName': 'Gadway, B',
         },
        {'userId': userIDs[7],
         'jobName': 'PHYS 212 University Physics: Elec & Mag grader',
         'salary': 1,
         'major': [0, 4, 8, 9, 12],
         'standing': [1, 2, 3],
         'contactEmail': 'Stelzer@illinois.edu',
         'contactName': 'Stelzer, T',
         },
        {'userId': userIDs[8],
         'jobName': 'TAM 212 Introductory Dynamics assistants',
         'salary': 1,
         'major': [3, 4, 10, 11, 13],
         'standing': [1, 2, 3],
         'contactEmail': 'William@illinois.edu',
         'contactName': 'William, K',
         },
        {'userId': userIDs[8],
         'jobName': 'TAM 335 Introductory Fluid Mechanics assistants',
         'salary': 1,
         'major': [3, 4, 10, 11, 13],
         'standing': [1, 2, 3],
         'contactEmail': 'Freund@illinois.edu',
         'contactName': 'Freund, J',
         }
    ]
    for i in range(len(graderPost)):
        graderPost[i][
            'description'] = 'Grading Quizzes, Exams, require less than 6 hr/week, Must getting A and above for the course'
        graderPost[i]['type'] = 0
        graderPost[i]['term'] = 2

    # Loop 'taskCount' number of times
    for i in range(len(graderPost)):
        # POST the task
        conn.request("POST", "/api/posts/add", json.dumps(graderPost[i]), headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

    researchPost = [
        {'userId': userIDs[0],
         'jobName': 'UNDERGRADUATE RESEARCH ASSISTANT (Energy Transport Research Laboratory)',
         'description': 'This project involves flow boiling of refrigerants in modified internal tubes. Heat transfer coefficients, pressure drops and temperature fluctuations would be measured to compare the performance of these modified tubes to those of internal tubes. \n The undergraduate researcher\'s primary responsibility would be to assist in running the experiments. The student would be trained and shown how to run tests for the first few weeks. Surface fabrication and data analysis would also be integral components of this project. Start date is summer and research credits via an independent study would be given for summer. The researcher can opt to stay on for future semesters, if interested. ',
         'type': 2,
         'salary': 1,
         'major': [3, 9, 11],
         'standing': [1, 2, 3],
         'term': 1,
         'contactEmail': userEmails[0],
         'contactName': userNames[0],
         }
    ]

    for i in range(len(researchPost)):
        # POST the task
        conn.request("POST", "/api/posts/add", json.dumps(researchPost[i]), headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

    # Exit gracefully
    conn.close()
    print(str(len(names)) + " users added at " + baseurl + ":" + str(port))


if __name__ == "__main__":
    main(sys.argv[1:])
