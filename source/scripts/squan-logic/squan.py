""" Logic for the entire virtual Square-1 """

from layer import Layer
import parity_check


class Squan:
    """Virtual Square-1 object"""

    def __init__(self, top=Layer, bottom=Layer):
        self.top = top
        self.bottom = bottom

    def slice(self):
        """Slice"""
        top_layer = self.top
        bottom_layer = self.bottom

        top_sliceable_pieces = top_layer.remove_slice_pieces()
        bottom_sliceable_pieces = bottom_layer.remove_slice_pieces()

        sliced_top = top_layer.add_slice_pieces(bottom_sliceable_pieces)
        sliced_bottom = bottom_layer.add_slice_pieces(top_sliceable_pieces)

        self.top = sliced_top
        self.bottom = sliced_bottom

    def check_for_parity(self):
        """Check for parity"""
        if parity_check.has_parity_problem(self.top, self.bottom):
            return "Has odd parity"
        # probably just remove parity check and add it to built in Squan functions
        return "Has even parity"
