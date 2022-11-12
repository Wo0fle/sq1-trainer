""" Logic for the the entire virtual Square-1 """

from layer import Layer

pieces = [2, 1, 2, 1, 0, 2, 1, 2, 1]


class Squan:
    """Virtual Square-1 object"""

    top_layer = Layer("top", pieces)
    bottom_layer = Layer("bottom", pieces)

    def __init__(self):
        pass
