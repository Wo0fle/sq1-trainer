""" Logic for the entire virtual Square-1 """

from layer import Layer
import parity_check


class Squan:
    """A virtual Square-1 object."""

    mid_layer_solved = True
    top = Layer("top")
    bottom = Layer("bottom")

    def __init__(self):
        pass

    def slice(self):
        """Does a slice move, if possible."""
        top_layer = self.top
        bottom_layer = self.bottom

        top_sliced_pieces = top_layer.remove_slice_pieces()
        bottom_sliced_pieces = bottom_layer.remove_slice_pieces()

        if (
            top_sliced_pieces != "Illegal slice"
            and bottom_sliced_pieces != "Illegal slice"
        ):
            top_layer.add_slice_pieces(bottom_sliced_pieces)
            bottom_layer.add_slice_pieces(top_sliced_pieces)

            self.mid_layer_solved = not self.mid_layer_solved

            self.top = top_layer
            self.bottom = bottom_layer

            print("sliced!")
            print(top_layer.pieces, bottom_layer.pieces)

    def check_for_parity(self):
        """Checks the current parity state (odd or even)."""
        if parity_check.has_parity_problem(self.top, self.bottom):
            return "Has odd parity"
        # probably just remove parity_check.py and add it to built in Squan functions
        return "Has even parity"
