""" Logic for the the entire virtual Square-1 """

from layer import Layer

pieces = [
    (2, "FL"),
    (1, "L"),
    (2, "BL"),
    (1, "B"),
    (2, "BR"),
    (1, "R"),
    (2, "FR"),
    (1, "F"),
]

top_layer = Layer("top", pieces)
bottom_layer = Layer("bottom", pieces)


class Squan:
    """Virtual Square-1 object"""

    def __init__(self, top, bottom):
        self.top = top
        self.bottom = bottom

    def slice(self):
        """Slice"""
